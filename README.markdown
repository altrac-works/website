# thank u for working on our web sight

## How to develop locally

1. Be sure you have soupault and python installed
2. Either run `bash ./watch.sh` or manually invoke soupault and `python -m http.server --directory .`
3. ???

## How to write pages

Make a new file called `blah.html` in the `text` dir. The result will be that this appears at `https://altrac.works/blah/`

Remember, the `/call/` url is special and currently is not in this repo.

## How to push changes to production

1. Log into web1 (as `altrac` probably).
2. `cd /srv/www/altrac`
3. `git pull`
    - This step will not really update the site contents but it *could* result in changes, for instance, if the css has changed, `git pull` will apply that change immediately.
4. `~/bin/soupault`
    - This final step actually generates the site.
