import React from 'react';
import NavigationItem from "./navigationItem";

const navigationItems = [
  { label: 'Criar anúncio', isActive: true },
  { label: 'Buscar anúncio' },
  { label: 'Comunicação' },
  { label: 'Perfil' },
  { label: 'Meus anúncios' },
  { label: 'Sair' }
];

const Header: React.FC = () => {
  return (
    <nav className="flex flex-row flex-wrap gap-40 justify-center py-2 mb-20 mx-0 w-full bg-white border-b border-zinc-300 max-md:px-5 max-md:max-w-full overflow-hidden">
      <div className='flex flex-row flex-wrap'>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64f13c3f11b23f2f29cc666aa089fd3ca99c780c0200160b0f96e53c06ebeefd?placeholderIfAbsent=true&apiKey=373b523e13e642948ff7f7e522970fd3" 
          alt="Company logo" 
          className="justify-start object-fill object-left shrink-0 self-start mt-2.5 -ml-0.5 aspect-[1.32] w-[82px]" 
        />
      </div>
      <ul className="flex flex-row flex-wrap gap-6">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} label={item.label} isActive={item.isActive} />
        ))}
      </ul>
    </nav>
  );
};

export default Header;