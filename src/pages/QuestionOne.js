import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";

const colors = [
    "red",
    "green",
    "yellow",
    "black",
    "blue",
    "pink",
    "violet",
    "grey"
]

const Button = styled.button `
  padding: 6px 12px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  :hover {
    background-color: #99c6f5;
  }
`;

const QuestionOne = () => {

    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef
                .current
                .getContext('2d');
        }
    }, []);

    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx
                .current
                .beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round';
            ctx
                .current
                .moveTo(lastPosition.x, lastPosition.y);
            ctx
                .current
                .lineTo(x, y);
            ctx
                .current
                .closePath();
            ctx
                .current
                .stroke();

            setPosition({x, y})
        }
    }, [lastPosition, mouseDown, selectedColor, setPosition])

    const download = async () => {
        const image = canvasRef
            .current
            .toDataURL('image/png');
        const blob = await(await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = "image.png";
        link.click();
    }

    const clear = () => {
        ctx
            .current
            .clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
    }

    const onMouseDown = (e) => {
        setPosition({x: e.pageX, y: e.pageY})
        setMouseDown(true)
    }

    const onMouseUp = (e) => {
        setMouseDown(false)
    }

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY)
    }

    return (
        <div>

            <canvas
                style={{
                    border: "0.5px solid #000"
                }}
                width={400}
                height={400}
                ref={canvasRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onMouseMove={onMouseMove}/>
            <br/>
            <span>
                &nbsp; &nbsp;
                <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}>
                    {colors.map(color => <option key={color} value={color}>{color}</option>)}
                </select>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>
                <Button onClick={clear}>지우기
                </Button>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
                <Button onClick={download}>
                    커스텀 다운로드

                </Button>
            </span>
        </div>
    );
}

export default QuestionOne