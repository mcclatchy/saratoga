PAGES := dist/index.html dist/facebook.html dist/twitter.html dist/instagram.html dist/youtube.html dist/image.html
all: clean $(PAGES)

#
# AMP pages
#

dist/%.html: data/%.json
	loopit -data $< -out $@ -shim templates/*.tmpl

#
# Aggregates
#

data/index.json: $(patsubst %,data/%.json, 216625110 latest 217387680 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/facebook.json: $(patsubst %,data/%.json, 217871140 latest 217919770 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/twitter.json: $(patsubst %,data/%.json, 217919770 latest 217896325 sports)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/instagram.json: $(patsubst %,data/%.json, 217896325 latest 216625110 sports)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/youtube.json: $(patsubst %,data/%.json, 217919330 latest 216625110 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@

data/image.json: $(patsubst %,data/%.json, 217011615 latest 217919330 politics)
	jq -s "{story: .[0], latest: .[1], readNext: .[2], section: .[3]}" $^ > $@
	
#
# Feeds
#
# 216625110 Brightcove
# 217871140 Facebook 
# 217919770 Twitter
# 217896325 Instagram
# 217919330 YouTube
# 217011615 Image
# 217387680 Generic Next

data/%.json:
	mapi -lead -section -inline -related "/v1/stories/$(basename $(notdir $@))?publication=kansascity" > $@

# Sections

data/latest.json:
	mapi -section "/v1/search/?content_type=story&section_id=2415&published_to=kansascity&sort=published_date" > $@

data/politics.json:
	mapi -lead -section "/v1/search/?content_type=story&section_id=2595&published_to=kansascity&sort=published_date" > $@

data/sports.json:
	mapi -lead -section "/v1/search/?content_type=story&section_id=2662&published_to=kansascity&sort=published_date" > $@

#
# Cleanup and publish
#

clean:
	rm -rf dist/*.html

public: all
	cp -r dist/* ../static/amp/designs/
	cd .. && hugo
