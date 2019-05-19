const { useEffect } = require('react');
const { createPortal } = require('react-dom');

const Portal = ({ children }) => {
  const container = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return createPortal(children, container);
};

Portal.default = Portal;
module.exports = Portal;
