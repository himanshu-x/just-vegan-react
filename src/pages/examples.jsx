import HorizontalMenu from "../components/HorizontalMenu"

const menuOptions = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Music'
    },
    {
        id: 3,
        name: 'Mixes'
    },
    {
        id: 4,
        name: 'Folk music'
    },
    {
        id: 5,
        name: 'T-Series'
    },
    {
        id: 6,
        name: 'Bollywood Music'
    },
    {
        id: 7,
        name: 'System design'
    },
    {
        id: 8,
        name: 'Coke studio'
    },
    {
        id: 9,
        name: 'Bollywood Music'
    },
    {
        id: 10,
        name: 'Live'
    },
    {
        id: 11,
        name: 'Computers'
    },
    {
        id: 12,
        name: 'Gadgets'
    },
    {
        id: 13,
        name: 'Comedy'
    },
    {
        id: 14,
        name: 'Games'
    },
    {
        id: 15,
        name: 'Recently Uploaded'
    },
    {
        id: 16,
        name: 'New to you'
    },
    {
        id: 17,
        name: 'Acoustic Guitar'
    },
    {
        id: 18,
        name: 'Trailers'
    },
    {
        id: 19,
        name: 'Plantation'
    },
    {
        id: 20,
        name: 'Illustration'
    }
]

export default function Examples() {



    return (
        <div>
            <h1>This is examples page</h1>
            <HorizontalMenu>
                <div className="flex gap-1">
                    {
                        menuOptions.map((opt) => {
                            return <span key={'opt-' + opt.id} className="badge inline-block py-2 px-4 bg-gray-300 whitespace-nowrap rounded-md">{opt.name}</span>
                        })
                    }
                </div>
            </HorizontalMenu>
        </div>
    )
}