import { Navbarstyle } from './Navbarstyle';
import logo from '../../assets/logo.png';

export function Navbar() {
  return (
    <Navbarstyle>
      <img src={logo} alt='logo not found' />
      <div className='sub-titles'>
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div className='shop-icon'>
        <i className='bi bi-bag'></i>
      </div>
    </Navbarstyle>
  );
}
