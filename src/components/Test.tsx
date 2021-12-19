import {FC, ChangeEvent, useState} from 'react'

interface Props {
    testProp: string;
}

export const Test: FC<Props> = ({testProp}) => {
    const [country, setCountry] = useState<string | null>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }
    
    return (
        <div>
            {country}
            <input placeholder="Enter country" onChange={handleChange}/>
         </div>
    )
}
