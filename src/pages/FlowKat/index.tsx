import React from 'react';
import Layout from '@theme/Layout';
import styled from "styled-components";
import image from '/src/pages/FlowKat/img/img.png'

const BlueButton = styled.button`
    background-color: blue;
    color: white;
`;

const BigBlueButton = styled(BlueButton)`
    padding: 10px;
    margin-top: 10px;
`;

const BigRedButton = styled(BigBlueButton)`
    background-color: red;
    color: white;
`;

const Button1 = styled.button`
    background: ${(props) => (props.color ? props.color : "white")};
`;

const Button2 = styled.button`
    background: ${(props) => props.color || "white"};
`;

const FlowKat = () => {
    return (
    <Layout>
        <BlueButton>Hello World</BlueButton>
        <br />
        <BigBlueButton>This is Big!!</BigBlueButton>
        <br />
        <BigRedButton>This is RED!!!!!!</BigRedButton>
        <br />
        <br />
        <br />
        <Button1>여길 보아라 Button1</Button1>
        <br />
        <Button1 color="orange">이걸 보세요 오렌지라구요!!</Button1>
        <br />
        <Button1 color="green">내가 그린 그린 그린</Button1>
        <br />
        <Button2>버튼 2 테스트입니다. 아마도 버튼1과 같은 내용이 될 듯 하하</Button2>
        <br />
        <Button2 color="pink">핑크핑크 props라는 개념을 익혀야 쓸만하겠군요</Button2>
        <br />
        <Button2 color="gray"> br / 태그가 아니라 br로 해봤슴미다. 어떤가요?</Button2>
        <img src={image} />
        <Button2 color="yellow"> 에러가 납니다. 당장 br / 로 바꿔주세요. </Button2>
    </Layout>
    );
}

export default FlowKat;
