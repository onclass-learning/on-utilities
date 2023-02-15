# OnClass Utilities Functions

Essa biblioteca contém funções utilitárias para formatação de dados e outras funcionalidades. Ela pode ser utilizada em projetos que necessitam de formatação de dados, como aplicações web, mobile, desktop, entre outras.

## Instalação

Para instalar a biblioteca, utilize o gerenciador de pacotes de sua escolha. Para o npm, execute o seguinte comando:

```szh
npm i @onclass-tech-learning/on-utilities
```

Para o yarn, execute o seguinte comando:

```szh
yarn add @onclass-tech-learning/on-utilities
```

## Funções de Formatação

### formatBytes

A função formatBytes recebe um número inteiro de bytes e retorna uma string formatada com a representação do tamanho em unidades maiores de armazenamento. Por exemplo, se o número de bytes for 1024, a função irá retornar "1 KB".

Exemplo de uso:

```js
import { formatBytes } from '@onclass-tech-learning/on-utilities

console.log(formatBytes(0)) // '0 bytes'
console.log(formatBytes(1024)) // '1.00 KB'
console.log(formatBytes(123456789)) // '117.74 MB'
console.log(formatBytes(1024 * 1024 * 1024 * 2)) // '2.00 GB'
```

### formatCnpj

A função formatCnpj recebe uma string contendo um CNPJ e retorna a string formatada com pontos, barras e traços. Por exemplo, se a string for "12345678000199", a função irá retornar "12.345.678/0001-99".

Exemplo de uso:

```js
import { formatCnpj } from '@onclass-tech-learning/on-utilities

console.log(formatCnpj('01234567890123')) // '01.234.567/8901-23'
```

### formatCpf

A função formatCpf recebe uma string contendo um CPF e retorna a string formatada com pontos e traços. Por exemplo, se a string for "12345678901", a função irá retornar "123.456.789-01".

Exemplo de uso:

```js
import { formatCpf } from '@onclass-tech-learning/on-utilities

console.log(formatCpf('11122233344')) // '111.222.333-44'
```

### formatDateTime

A função formatDateTime recebe um objeto DateTime do PHP e retorna uma string formatada com a data e hora no formato "d/m/Y H:i:s".

Exemplo de uso:

```js
import { formatDateTime } from '@onclass-tech-learning/on-utilities

console.log(dateTime(new Date())); // '15/02/2023 10:30:15'
```

### formatDate

A função formatDate recebe um objeto DateTime do PHP e retorna uma string formatada com a data no formato "d/m/Y".

Exemplo de uso:

```js
import { formatDate } from '@onclass-tech-learning/on-utilities

console.log(date(new Date())); // '15/02/2023'
```

### formatDays

A função formatDays recebe um número inteiro de dias e retorna uma string formatada com a representação do número de dias em anos, meses e dias. Por exemplo, se o número de dias for 365, a função irá retornar "1 ano".

Exemplo de uso:

```js
import { formatDays } from '@onclass-tech-learning/on-utilities

console.log(formatDays(0)) //'Hoje'
console.log(formatDays(1)) //'1 dia'
console.log(formatDays(2)) //'2 dias'
console.log(formatDays(10)) //'10 dias'
```

### formatMoney

A função formatMoney recebe um número decimal e retorna uma string formatada com o valor em reais. Por exemplo, se o número for 10.5, a função irá retornar "R$ 10,50".

Exemplo de uso:

```js
import { formatMoney } from '@onclass-tech-learning/on-utilities

console.log(formatMoney(1000.5)) // 'R$ 1.000,50'

```

### formatPercentage

A função formatPercentage recebe um número decimal e retorna uma string formatada com o valor em porcentagem. Por exemplo, se o número for 0.5, a função irá retornar "50%".

Exemplo de uso:

```js
import { formatPercentage } from '@onclass-tech-learning/on-utilities

console.log(formatPercentage(0.123456)) // '0,123%'
```

### formatPhone

A função formatPhone recebe uma string contendo um número de telefone e retorna a string formatada com parênteses, traços e espaços. Por exemplo, se a string for "11987654321", a função irá retornar "(11) 98765-4321".

Exemplo de uso:

```js
import { formatPhone } from '@onclass-tech-learning/on-utilities

console.log(formatPhone('4198765432')) // '(41) 9876-5432'
```

### formatZipCode

A função formatZipcode recebe uma string contendo um CEP e retorna a string formatada com traços. Por exemplo, se a string for "01234567", a função irá retornar "01234-567".

Exemplo de uso:

```js
import { formatZipCode } from '@onclass-tech-learning/on-utilities

console.log(formatZipCode('12345678')) // '12345-678'
```

## Funções Utilitárias

### Wait

A função `wait` recebe um número inteiro de segundos e faz o programa esperar pelo tempo especificado antes de continuar a execução.

Exemplo de uso:

```js
import { wait } from '@onclass-tech-learning/on-utilities

console.log(wait(timeout));
```

### doTruncateText

A função `doTruncateText` recebe uma string e um número inteiro indicando o tamanho máximo da string. Se a string for maior do que o tamanho máximo, a função irá cortar a string e adicionar reticências ao final.

Exemplo de uso:

```js
import { doTruncateText } from '@onclass-tech-learning/on-utilities

const text = 'doTruncateText should return the full text when it is shorter than the limit'
const limit = 20

console.log(doTruncateText(text, limit)); // 'This is a longer tex...'
```

### randomId

A função `randomId` gera um ID aleatório de 8 caracteres alfanuméricos.

Exemplo de uso:

```js
import { randomId } from '@onclass-tech-learning/on-utilities

console.log(randomId()); // '45d26c86-5010-7e88-32da-839b711dbeb2'
```

### getExtensionFile

A função `getExtensionFile` recebe uma string contendo o nome de um arquivo e retorna a extensão do arquivo. Por exemplo, se a string for "arquivo.txt", a função irá retornar "txt".

Exemplo de uso:

```js
import { createNameIcon } from '@onclass-tech-learning/on-utilities

console.log(getExtensionFile('application/pdf')); // 'PDF'
console.log(getExtensionFile('image/jpeg')); // 'JPG'
console.log(getExtensionFile('image/png')); // 'PNG'
console.log(getExtensionFile('image/gif')); // 'GIF'
console.log(getExtensionFile('text/csv')); // 'CSV'
console.log(getExtensionFile('video/mp4')); // 'MP4'
console.log(getExtensionFile('foo/bar')); // 'FILE'
```

### createNameIcon

A função `createNameIcon` recebe uma string contendo o nome de um usuário e retorna uma string com as iniciais do nome em um círculo, como um ícone. Por exemplo, se a string for "João Silva", a função irá retornar "JS" dentro de um círculo.

Exemplo de uso:

```js
import { createNameIcon } from '@onclass-tech-learning/on-utilities

console.log(createNameIcon('John Doe')); // 'JD'
```
