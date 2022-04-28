import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) =>
(
    <>
        <h1>헤더입니다.</h1>
        <Link to="/"><li>인트로보자</li></Link>
        <Link to="/history"><li>히스토리보자</li></Link>
        <Link to="/gallery"><li>갤러리보자</li></Link>
    </>
)

export default Header;