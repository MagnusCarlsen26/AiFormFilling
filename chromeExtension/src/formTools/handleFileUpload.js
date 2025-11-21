import { SERVER_URL} from "../constants/serverUrl";

export async function handleFileUpload(payload) {
  const { fileName, selector } = payload;
  const input = document.querySelector(selector);

  try {
    const response = await fetch(`${SERVER_URL}/assets/${fileName}`);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: 'application/pdf' });

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;

    // Find React's internal props
    const reactPropsKey = Object.keys(input).find(
      key => key.startsWith('__reactProps') || key.startsWith('__reactEventHandlers')
    );
    
    if (reactPropsKey && input[reactPropsKey]?.onChange) {
      // Call React's onChange directly
      input[reactPropsKey].onChange({ 
        target: input, 
        currentTarget: input 
      });
      console.log('✅ Called React onChange directly');
    } else {
      // Fallback to events
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    console.log(`✅ Uploaded: ${fileName}`);
  } catch (e) {
    console.error('Failed:', e);
  }
}

function convertFileToBlog(
    blob, 
    fileName
) {

    return new File(
        [blob],
        fileName,
        { type: 'application/pdf' }
    )

}