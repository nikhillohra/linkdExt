export default defineBackground(() => {
  console.log('Hello LinkedIn AI Reply Generator background!', { id: browser.runtime.id });
  
  // Set up a listener for incoming messages
  browser.runtime.onMessage.addListener((message: { type: string }, sender, sendResponse: (response: { reply: string }) => void) => {
    if (message.type === 'GENERATE_REPLY') {
      console.log('Generating reply from background script.');
      // Sending a response back
      sendResponse({
        reply: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
      });
    }
    return true; // Returning true indicates that the sendResponse will be called asynchronously
  });
});



