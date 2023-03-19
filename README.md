# Aprendendo SOLID com TypeScript

Este projeto tem como objetivo aprender os princípios do SOLID e aplicá-los em um contexto real, utilizando TypeScript. O contexto da aplicação é sobre um carrinho de compras.

O SOLID é um conjunto de princípios de design de software que visam criar sistemas mais flexíveis, escaláveis e fáceis de manter. Ele é composto por cinco princípios: Single Responsibility Principle (SRP), Open-Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP) e Dependency Inversion Principle (DIP).

A estrutura do projeto foi organizada de acordo com cada um dos princípios do SOLID. Cada pasta do projeto é responsável por implementar um princípio específico. Além disso, há um arquivo chamado legacy.ts que não utiliza nenhum princípio do SOLID. Ele foi criado para fins de comparação e demonstrar a importância de aplicar esses princípios.

A pasta src/srp implementa o Single Responsibility Principle, que preconiza que uma classe deve ter apenas uma responsabilidade. Nessa pasta, as classes relacionadas ao carrinho de compras são organizadas de acordo com suas responsabilidades, como cálculo de preço e adição de produtos.

Já a pasta src/ocp implementa o Open-Closed Principle, que preconiza que uma classe deve estar aberta para extensão, mas fechada para modificação. Nessa pasta, o carrinho de compras foi implementado de forma que possa ser facilmente estendido para lidar com novos tipos de produtos ou promoções.

A pasta src/lsp implementa o Liskov Substitution Principle, que preconiza que uma classe derivada deve ser substituível por sua classe base. Nessa pasta, o carrinho de compras foi implementado de forma que possa lidar com diferentes tipos de produtos, como livros e eletrônicos, sem afetar seu comportamento.

A pasta src/isp implementa o Interface Segregation Principle, que preconiza que uma classe não deve depender de interfaces que não utiliza. Nessa pasta, as interfaces relacionadas ao carrinho de compras foram separadas de acordo com suas responsabilidades.

Por fim, a pasta src/dip implementa o Dependency Inversion Principle, que preconiza que uma classe deve depender de abstrações e não de implementações concretas. Nessa pasta, as classes relacionadas ao carrinho de compras dependem apenas de interfaces e não de implementações concretas.
