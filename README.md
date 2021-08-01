<img src="https://github.com/AdamRichard21st/cs-skins-management/blob/master/assets/images/github/preview.gif?raw=true" width="100%" height="auto" alt="Preview"/>

# About

This a compacted web-based tool for outputing goldsource models subgroups indexes.

# Who need this?

People who run goldsource mods that supports model subgroups might need to set `$bodygroups` combinations indexes inside the mods configs files. (ex: [The Doctor0's CSGOMOD](https://github.com/TheDoctor0/CSGOMod/))

This become complex as long as the models files has lots of `$bodygroup` combinations containing separated groups for the same weapon skin.

# Usage

* Download this repository
* Open the `index.html` in your web browser (webkit based browsers preferably).
* At settings form, set the total of `$bodygroup` lists that behaves to the weapon body in your `weapon.qc` file.
* At skin form, optionally add the skin name and its texture for listing purpose and click `Add to list`.
* Once a skin is added, its body group index will be attached to the front of its name. Just click to copy!

# Credits

Thanks to [@Goodnato](https://github.com/Goodnato/) for the [javascript sub group code](https://github.com/AdamRichard21st/cs-skins-management/blob/master/src/js/subgroups.js).