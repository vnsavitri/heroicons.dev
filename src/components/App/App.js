import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import Search from "./Search"

// document.body.classList.add("debug-css")

const Container = props => (
	<div className="py-32 flex flex-row justify-center min-h-full bg-gray-100">
		<div className="px-6 w-full max-w-screen-lg">
			{props.children}
		</div>
	</div>
)

const App = props => {
	// const [prefersSolid, setPrefersSolid] = React.useState(false)

	const [value, setValue] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	React.useEffect(() => {
		const id = setTimeout(() => {
			const query = value.toLowerCase()
			const filteredIcons = originalIcons.filter(each => each.name.includes(query))
			setIcons(filteredIcons)
		}, 25)
		return () => {
			clearTimeout(id)
		}
	}, [value])

	return (
		<Container>

			{/* H1 */}
			<h1 className="text-center font-dm-sans font-bold text-5xl tracking-tighter">
				Heroicons
			</h1>

			{/* H2 */}
			<div className="h-3" />
			<h2 className="text-center font-medium text-xl -tracking-px leading-relaxed text-gray-800">
				<a className="text-indigo-500" href="https://github.com/refactoringui/heroicons">
					Open source icons
				</a>{" "}
				by{" "}
				<a className="mx-px text-indigo-500" href="https://twitter.com/steveschoger">
					Steve S<span className="hidden md:inline">choger</span><span className="inline md:hidden">.</span>
				</a>{" "}
				and{" "}
				<a className="mx-px text-indigo-500" href="https://twitter.com/adamwathan">
					Adam W<span className="hidden md:inline">athan</span><span className="inline md:hidden">.</span>
				</a>
				<br />
				<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer">
					Viewer
				</a>{" "}
				by{" "}
				<a className="mx-px text-indigo-500" href="https://twitter.com/username_ZAYDEK">
					Zaydek
				</a>{" "}
				and{" "}
				<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer">
					the GitHub community
				</a>
			</h2>

			{/* Buttons */}
			{/* <div className="h-12" /> */}
			{/* <div className="flex flex-row justify-center"> */}
			{/* 	<button className="px-6 py-4 bg-white rounded-lg-xl shadow"> */}
			{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
			{/* 			Get the icons! */}
			{/* 		</p> */}
			{/* 	</button> */}
			{/* 	<div className="w-3" /> */}
			{/* 	<button className="px-6 py-4 bg-white rounded-lg-xl shadow"> */}
			{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
			{/* 			Contribute */}
			{/* 			<GitHubLogo className="ml-3 inline-block w-5 h-5 text-black" /> */}
			{/* 		</p> */}
			{/* 	</button> */}
			{/* </div> */}

			{/* Search, etc. */}
			<div className="h-12" />
			<Search value={value} setValue={setValue} solid={solid} setSolid={setSolid} />
			<div className="h-6" />
			<IconGrid solid={solid} icons={icons} />

		</Container>
	)
}

export default App
