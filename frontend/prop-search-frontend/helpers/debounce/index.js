
/**
 * Debounce function
 * @param {Function} fn - function to be debounced
 * @param {Number} time - time to wait before calling the function
 * @returns {Function} - debounced function
 * @example 
 * const debouncedFunction = debounce(()=>console.log('Hello'), 1000)
 * debouncedFunction()
 
 */

function debounce(fn, time) {
   
    // Create a timeout variable
    let timeout;

    // Return a function
    return function() {

        // Save the context of the function
      const args = arguments;

      // Create a function to be called after the time
      const functionCall = () => fn.apply(this, args);

      // Clear the timeout
      clearTimeout(timeout);

      // Call the function after the time
      timeout = setTimeout(functionCall, time);
    }
  }

  export default debounce