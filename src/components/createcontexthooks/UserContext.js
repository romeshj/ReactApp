import React, { createContext, useState } from 'react';

export const UsrContext = createContext();


export const UsrProvider = ({children}) => {

	const [name, setName] = useState('Romesh');
	const [city, setCity] = useState('Mumbai');
    
	return(
		<UsrContext.Provider value={{ name, city, setName, setCity }}>{children}</UsrContext.Provider>
	)
}
