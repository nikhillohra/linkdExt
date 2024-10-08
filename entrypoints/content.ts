export default defineContentScript({
  matches: ['*://www.linkedin.com/*'],  // Target LinkedIn URLs
  main() {
    console.log('Hello from LinkedIn content script.');

    // Type-safe listener for focus events
    document.addEventListener('focusin', (event: FocusEvent) => {
      const messageInputSelector = '[aria-label="Write a message…"]';

      // Type guard for target as HTMLElement
      const target = event.target as HTMLElement;

      if (target && target.matches(messageInputSelector)) {
        console.log('Message input focused.');

        // Check if the AI button already exists to avoid duplicates
        if (!document.getElementById('ai-button')) {
          const aiButton = document.createElement('div');
          aiButton.id = 'ai-button';
          aiButton.innerText = '🤖 AI';
          aiButton.style.position = 'absolute';
          aiButton.style.right = '10px';
          aiButton.style.bottom = '10px';
          aiButton.style.padding = '5px';
          aiButton.style.backgroundColor = '#0073b1'; // LinkedIn blue color
          aiButton.style.color = 'white';
          aiButton.style.borderRadius = '50%';
          aiButton.style.cursor = 'pointer';

          // Safely append to the parent element of the input field
          target.parentElement?.append(aiButton);

          // Add click event to the AI button to trigger modal (handled in popup)
          aiButton.addEventListener('click', () => {
            console.log('AI button clicked! Displaying modal...');
            
            // Example of sending a message to background (optional)
            browser.runtime.sendMessage({ type: 'SHOW_MODAL' });
          });
        }
      }
    });

    // Type-safe listener for blur events (remove the button when input loses focus)
    document.addEventListener('focusout', (event: FocusEvent) => {
      const messageInputSelector = '[aria-label="Write a message…"]';

      const target = event.target as HTMLElement;

      if (target && target.matches(messageInputSelector)) {
        console.log('Message input lost focus.');
        const aiButton = document.getElementById('ai-button');
        if (aiButton) aiButton.remove();
      }
    });
  }
});
