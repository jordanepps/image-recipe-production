import React from 'react';

function ImageLink(props) {
  const { setLink, disabled } = props;

  const handleInputChange = e => {
    setLink(e.target.value);
  };

  return (
    <section>
      <div>
        <input name="link" onChange={handleInputChange} disabled={disabled} />
      </div>
    </section>
  );
}
export default ImageLink;
