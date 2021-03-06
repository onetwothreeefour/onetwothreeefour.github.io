import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World!" />
      <Link to="/info/">To Info</Link>
    </div>
  );
};

export default IndexPage;