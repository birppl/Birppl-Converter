Конвертер в JPEG | Birppl
========================

### Конвертация изображений с помощью JavaScript и HTML Canvas в JPEG.

FAQ
-----------------------------------

**В каком формате принимаются исходные изображения?**


> 1. JPEG
> 2. PNG


**Какое качество сжатия?**
 

> 0.65


**Можно ли изменить качество сжатия?**


>Для того, чтобы изменить качество сжатия, достаточно прописать вторым параметром функции **число от 0 до 1.**  
>
>```js 
>let jpeg = canvas.toDataURL("image/jpeg", 0.65);
>```


**Есть ли максимальное количество изображений для загрузки?**

> Да, на данный момент конвертер **не поддерживает загрузку больше одного изображения.** 
