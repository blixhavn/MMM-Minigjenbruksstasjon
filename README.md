# MMM-Minigjenbruksstasjon

This is a tiny, simple module for [MagicMirror²](https://magicmirror.builders/), mostly for my own convenience. If you're living in central Oslo, you might be far from regular recycling stations. In these cases, mobile recycling stations are regularly placed on specific locations. This is simply a module to notify you if such a station is deployed. Uses simple configuration to indicate placement, as no API is availble, and scraping the information seems cumbersome.

<img src="./img/example.jpg">

## Installation


## Installation

Enter your MagicMirror² module folder, e.g.:

    cd ~/MagicMirror/modules

Clone the repository

    git clone https://github.com/blixhavn/MMM-Minigjenbruksstasjon.git

Add the module to your configuration file, for instance:

    {
        module: "MMM-Minigjenbruksstasjon",
        position: "top_right",
        config: {
            dayOfWeek: "monday",
            timeFrom: "18:00",
            timeTo: "19:30"

        }
    },

## Configuration options

You can find your closest recycling station [here](https://www.oslo.kommune.no/avfall-og-gjenvinning/alle-gjenbruksstasjoner/), and read its opening hours from there. As far as I could see, all mobile recylcing stations are open on a specific day of the week. If this is not the case, feel free to make a PR to support your specific case, or make an issue on GitHub.


| Configuration option | Comment                                                                                                                                                                                                    | Default                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| dayOfWeek       | Literal, lower case weekday                                                                                   | "tuesday"                         |
| timeFrom     | ISO formatted string to indicate opening time.                                                  | "16:00" |
| timeTo     | ISO formatted string to indicate closing time|"17:30"                            |
| updateSpeed                 | Transition speed when updating the display (in milliseconds).                                                                                                                                                                                 | 1000                      |

## Feedback and contributions
If you have any feedback, questions or suggestions, do not hesitate to make an issue on GitHub 🙂 Also, feel free to make contributions in form of pull requests!


## License 
MMM-Minigjenbruksstasjon is released under the MIT license. Have at it.

-----
Made by Øystein Blixhavn