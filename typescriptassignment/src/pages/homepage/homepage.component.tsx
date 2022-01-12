import React from 'react';
import './homepage.styles.scss';
import { AnimalKingdom } from './kingdom';
import HomeItems from '../../components/homeitems/homeitems';

class HomePage extends React.Component {
state = {
         animals : AnimalKingdom
     }

 render() {
     console.log('this.state.animals', this.state.animals)
     return(
         <div className='homepage'>
             {this.state.animals.map(({ id, ...otherProps}) => (
                 <HomeItems key={id} {...otherProps} />
             ))}
         </div>
     )
 }
}

export default HomePage;