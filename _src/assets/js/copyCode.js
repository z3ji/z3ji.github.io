function initializeCopyCode() {
    var codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(function(codeBlock) {
        // Check if a copy button already exists
        if (codeBlock.parentElement.querySelector('.copy-button')) return;

        var button = document.createElement('button');
        button.className = 'copy-button';

        // Create SVG element for copy state
        var svgCopy = createSvgCopy();

        // Create SVG element for copied state
        var svgCopied = createSvgCopied();

        // Append copy SVG to button
        button.appendChild(svgCopy);

        // Create text node for button
        var buttonText = document.createTextNode('Copy Code');
        button.appendChild(buttonText);

        button.addEventListener('click', function() {
            var range = document.createRange();
            range.selectNode(codeBlock);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            try {
                var success = document.execCommand('copy');
                if (success) {
                    // Change button content to "Copied!" when successfully copied
                    button.innerHTML = '';
                    button.appendChild(svgCopied);
                    var copyText = document.createTextNode('Copied!');
                    button.appendChild(copyText);
                    setTimeout(function() {
                        // Change button content back to "Copy Code" after a short delay
                        button.innerHTML = '';
                        button.appendChild(svgCopy);
                        var buttonText = document.createTextNode('Copy Code');
                        button.appendChild(buttonText);
                    }, 1500); // Adjust delay as needed
                    //console.log('Code copied to clipboard');
                } else {
                    console.error('Failed to copy code to clipboard');
                }
            } catch (err) {
                console.error('Error copying code to clipboard:', err);
            }

            window.getSelection().removeAllRanges();
        });

        codeBlock.parentElement.appendChild(button);
    });
}

// Function to create SVG element for "Copy" state
function createSvgCopy() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '2 2 24 24');
    svg.setAttribute('fill', 'none');
    svg.classList.add('icon-sm');

    // Create path element
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    //path.setAttribute('d', 'M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z');
    path.setAttribute('fill', 'currentColor');

    // Append path to SVG
    svg.appendChild(path);

    return svg;
}

// Function to create SVG element for "Copied" state
function createSvgCopied() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '2 2 24 24');
    svg.setAttribute('fill', 'none');
    svg.classList.add('icon-sm');

    // Create path element
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    //path.setAttribute('d', 'M18.0633 5.67375C18.5196 5.98487 18.6374 6.607 18.3262 7.06331L10.8262 18.0633C10.6585 18.3093 10.3898 18.4678 10.0934 18.4956C9.79688 18.5234 9.50345 18.4176 9.29289 18.2071L4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929C5.18342 11.9023 5.81658 11.9023 6.20711 12.2929L9.85368 15.9394L16.6738 5.93664C16.9849 5.48033 17.607 5.36263 18.0633 5.67375Z');
    path.setAttribute('fill', 'currentColor');

    // Append path to SVG
    svg.appendChild(path);

    return svg;
}

document.addEventListener('DOMContentLoaded', function() {
    initializeCopyCode();
});
