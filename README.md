# Module: MMM-zoom
> Scale the entire UI with this plugin

If you are running MagicMirror in a Docker container, like me, you may noticed the `custom.css` file will not be loaded. This is because only the `modules` and the `config` directory are mounted. So if you want to scale your MagicMirror UI with custom CSS it won't work. This module will do the job.

## Screenshots

### Default zoom

![MMM-zoom - 100%](MMM-zoom-1.00.png)

### 75% zoom

![MMM-zoom - 75%](MMM-zoom-0.75.png)

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone git@github.com:maartenpaauw/MMM-zoom.git
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

````javascript
modules: [
    {
        module: 'MMM-zoom',
        config: {
            zoom: 0.75
        }
    }
]
````

## Configuration options

The following property can be configured:

| Option | Description                                                           |
| ------ | --------------------------------------------------------------------- |
| `zoom` | Zoom level as a number or a percentage. <br>**Default value:** `0.75` |

## Authors

- **Maarten Paauw** - *Initial work* - [maartenpaauw](https://github.com/maartenpaauw)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](https://github.com/maartenpaauw/MMM-zoom/blob/master/LICENSE.md) file for details

## Acknowledgments

- [FredSWG](https://forum.magicmirror.builders/user/fredswg) - Code sample "how-to" scale the entire Magic Mirror UI.

