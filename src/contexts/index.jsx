import { CarrinhoProvider } from './Carrinho';

const AppProvider = ({ children }) => {
  return (
    <CarrinhoProvider>
      {children}
    </CarrinhoProvider>
  );
};

export default AppProvider;