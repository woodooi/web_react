import { Wrapper, InfoSpan, ItemDiv, Archangel, Fields, AmountInput,
		 Characteristics, Char1, Char2, PriceDiv, Button, ButtonGray, SeatsSelect } from "./ItemLayout.styled";
import { TextWrapper } from "../globals";
import { DataContext } from "../App";
import { useParams, useHistory } from "react-router-dom";
import React, { useContext } from "react";

export const ItemLayout = ({archangel}) => {


		const planes = useContext(DataContext);
		const history = useHistory();
		const {_, id} = useParams();
		const [data] = planes.filter((plane) => plane.id == id);

		function handleGoBack() {
			history.push('/catalog');
		};

    return (
			<Wrapper>
				<ItemDiv>
					<Archangel src={archangel} alt="archangel" />
					<InfoSpan>
						<Characteristics>
							<Char1>Tank volume: {data.vol} g</Char1>
							<Char2>beaty: 100%</Char2>
						</Characteristics>
						<TextWrapper>
							<h1>{data.title}</h1>
							<p>{data.desc}</p>
						</TextWrapper>
						<Fields>
							<span>
								<h1>Amount:</h1>
								<br />
								<AmountInput placeholder="1" type="number"/>
							</span>
							<span style={{margin: '30px'}}>
								<h1>Number of Seats:</h1>
								<br />
								<SeatsSelect />
							</span>
						</Fields>
					</InfoSpan>
				</ItemDiv>
				<PriceDiv>
						<h2>Price:  ${data.price}</h2>
						<span>
							<Button onClick={handleGoBack}>Go Back</Button>
							<ButtonGray>Add to Cart</ButtonGray>
						</span>
					</PriceDiv>
			</Wrapper>
    );
}
