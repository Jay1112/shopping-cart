import React from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

function Ratings({rating}){
	return (
		<div>
			{
				[...Array(5)].map((_,index) => (
					<span key={index}>
						{
							rating > index ? (
								<AiFillStar fontSize="15px" />
							) : (
								<AiOutlineStar fontSize="15px" />
							) 
						}
					</span>
				))
			}
		</div>
	);
}

export default Ratings;