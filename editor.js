const frame = document.getElementById('frame');
const iframeDoc = frame.contentDocument || frame.contentWindow.document;
iframeDoc.body.style.backgroundColor = 'red';