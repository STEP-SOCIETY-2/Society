import StarWars from "../../../static/arts//starwars.png";

export const Scifi = ({ activeSection }) => {
	let style =
		"h-screen absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 8) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-5 lg:pt-0">
				<div className="h-full lg:pt-32 flex justify-start lg:justify-center">
					<img src={StarWars} className=" h-5/6" />
				</div>
				<div className="h-full flex items-center justify-center pt-20 lg:pt-0 order-first lg:order-last pb-10 lg:pb-0">
					<div className="w-4/5 flex-col lg:px-0 lg:w-3/3 space-y-5 lg:space-y-7 text-right lg:text-left">
						<p className="font-bold text-lg lg:text-4xl leading-normal">
							We are Society – Inviting you to join our intergalactic party{" "}
						</p>

						<p className="font-spacegr text-sm lg:text-base">
							Star Wars is just another sci-fi movie for most people, but we consider it a way of life.
							We are the Star Wars Women’s League, and you are cordially invited to our costume party.
						</p>
						<p className="font-spacegr text-sm lg:text-base">
							At these monthly parties, we host everyone –  Boys, girls, aliens, and space invaders alike – Wearing Star Wars costumes. We spend hours watching and talking about any one of the Star Wars movies, or we role play, competing in teams to reenact our favorite battle scenes.

						</p>
						<p className="font-spacegr text-sm lg:text-base">
							You better bring your A-game!<br/>
							<b>
								PS: No Costume, No Entry <span className="rotate-45">&#128512;</span>   !
							</b>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
