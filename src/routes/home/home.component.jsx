import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
    {
      id: 6,
      title: 'Kids',
      imageUrl: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

    },

  ];
    return (
      <div>
        <Outlet/>
            <Directory categories={categories} />
        
    </div>
  );

};

export default Home;
