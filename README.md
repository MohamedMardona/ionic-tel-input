
# ionic wrapper for intl-tel-input

# Installation

Run following command to install  ionic-tel-input

```sh
npm install  ionic-tel-input intl-tel-input --save
```

After install, you need to add **intlTelInput.css**.

In case of angular-cli, add **intlTelInput.css** in your styles.scss. For example,
```@import 'intl-tel-input/build/css/intlTelInput.css';```

Now add  ionicTelInputModule into your AppModule. For example,

```js
import { ionicTelInputModule} from ' ionic-tel-input-ionic';
```

Once done, we are ready to use this library.

# How to use?

In order to use this directive, you need to add " ionicTelInput" directive with "[ ionicTelInputOptions]" options to your text field. For example,

```html
<input type="text"
   ionicTelInput
  [ ionicTelInputOptions]="{initialCountry: 'in'}"
  (hasError)="hasError($event)"
  ( ionicTelOutput)="getNumber($event)"
  (intlTelInputObject)="telInputObject($event)"
  (countryChange)="onCountryChange($event)" />
```

# Note
**(intlTelInputObject)** returns original element which hold **intl-tel-input** instance.

# How to use this instance?
You can use it perform any functionality that is available on intl-tel-input plugin. **For example**, in your component,
```
telInputObject(obj) {
    console.log(obj);
    obj.intlTelInput('setCountry', 'in');
  }
```

![N|Solid](./example.png)
