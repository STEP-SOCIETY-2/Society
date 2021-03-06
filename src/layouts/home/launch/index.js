import Loader from "react-loader-spinner";
export const Lanuch = ({ activeSection, email, nickname, setNickname, setEmail, onSubmitData, test, setTest, loading, error }) => {
	let style =
		"h-screen w-full absolute transform transition duration-500 ease-in-out overflow-y-auto lg:overflow-y-hidden";
	if (activeSection === 11) {
		style = style + " translate-y-0";
	} else {
		style = style + " translate-y-full";
	}
	return (
		<div className={style}>
			<div className="bg-form lg:pt-32 pt-14 space-y-9 h-full pb-10">
				<div className="pt-10">
					<p className="text-2xl lg:text-5xl font-bold lg:font-extrabold text-center tracking-tighter pt-5 lg:pt-0">
						Be the first to know when we<br />
						launch
					</p>
				</div>
				<div className="flex flex-col space-y-3 items-center">
					<input
						required
						type="text"
						value={nickname}
						onChange={(event) => setNickname(event.target.value)}
						placeholder="nickname"
						className="h-14 lg:h-20 pl-5 lg:pl-10 placeholder-gray-900 border-4 lg:border-8 w-4/5 lg:w-2/5"
					/>
					<input
						required
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="email"
						className="h-14 lg:h-20 pl-5 lg:pl-10 placeholder-gray-900 border-4 lg:border-8 w-4/5 lg:w-2/5"
					/>
				</div>
				<div className="flex flex-col items-center text-center space-y-10">
					<div className="flex items-center justify-center w-4/5 lg:w-full space-x-4">
						<span className={`flex-none h-6 w-6 lg:h-7 lg:w-7 border-4 ${test ? "bg-orange" : ""}`} onClick={() => setTest(!test)} />
						<span>
							<p className="grow text-lg lg:text-xl font-spacegr text-left">
								Would you love to test our app when it's ready?
							</p>
						</span>
					</div>
					{!loading && <button onClick={() => {
						onSubmitData();
					}} className="flex items-center pb-5 py-5 lg:py-3 justify-center w-36 lg:w-36 border-4 lg:border-8 border-orange cursor-pointer">
						<p>
							Submit
						</p>
					</button>}

					{loading &&
						<div className="flex justify-center">
							<Loader
								type="ThreeDots"
								color="#314133"
								height={50}
								width={50}
							/>
						</div>
					}
				</div>
			</div>
		</div>
	);
};
