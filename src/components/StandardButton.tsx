import React, {useState} from "react";
import styled from "styled-components";
import { ShadowBox } from "./ShadowBox";
import { Colors } from "../utils/Colors";

const ButtonContainer = styled(ShadowBox)<{width: number; height: number; color?: string}>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({width}) => width}px;
	height: ${({height}) => height}px;
	background-color: ${({color}) => color ?? "white"};

	user-select: none;

	:hover {
		background-color: ${Colors.buttonHoverGreen};
		cursor: pointer;
	}
`;

interface IComponent {
	className?: string;
	text: string;
	width?: number;
	height?: number;
	color?: string;
	onClick: () => Promise<void>;
}

export const StandardButton = ({className, text, onClick, width = 118, height = 33, color}: IComponent) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<ButtonContainer
			className={className}
			width={width}
			height={height}
			onClick={async () => {
				setIsLoading(true);
				await onClick();
				setIsLoading(false);
			}}
			color={color}
		>
			{isLoading ? "😎" : text}
		</ButtonContainer>
	);
};
