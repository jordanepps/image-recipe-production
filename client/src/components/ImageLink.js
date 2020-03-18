import React from 'react';

function ImageLink(props) {
  const { setUrl, disabled } = props;

  const handleInputChange = e => {
    //check if link is valid
    setUrl(e.target.value);
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
