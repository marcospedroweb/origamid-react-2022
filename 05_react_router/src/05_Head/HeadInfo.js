import React from 'react';

const HeadInfo = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  return <></>;
};

export default HeadInfo;
