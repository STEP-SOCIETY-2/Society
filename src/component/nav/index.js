import Logo from "../../static/logo/logo.svg";
import LogoWhite from "../../static/logo/logowhite.svg";

const WHITEBG = [0, 5, 6, 7, 8, 9];
const PINKBG = [1, 2, 10]
const GREENBG = [4, 11]
const YELLOWBG = [3]

export const NavBar = ({ activeSection, setActiveSection }) => {

	return (
		<>
			{activeSection !== 12 ? (<div
				className={`fixed w-full z-50 
			${WHITEBG.includes(activeSection) ? 'bg-secondary' : ''} 
			${PINKBG.includes(activeSection) ? 'bg-pink' : ''}  
			${GREENBG.includes(activeSection) ? 'bg-green' : ''}
			${YELLOWBG.includes(activeSection) ? ' bg-gold' : ''}
			`} >
				<div onClick={() => {
					if(activeSection !== 0){
						setActiveSection(0)
					}
					}} className="h-20 lg:h-32 flex justify-center items-center cursor-pointer">
					<span className="px-2 lg:px-5">
						{
							GREENBG.includes(activeSection) ?
								<img src={LogoWhite} className="h-7 lg:h-10" />
								:
								<img src={Logo} className="h-7 lg:h-10" />
						}

					</span>
					<p
						className={`text-3xl lg:text-5xl font-medium 
					${GREENBG.includes(activeSection) ? 'text-secondary' : 'text-green'}
					`}>society</p>
				</div>
			</div>) : null}
		</>
	);
};
