error:
	@echo "Please choose one of the following target: init"
	
init:
	@npm install

commit:
	@git add -A
	@DESCRIPTION=$$(gum write --width 60 --height 6 --base.margin "1 1" --cursor.foreground 31 --placeholder "Details of this change (CTRL+D to finish)");\
	gum confirm --selected.background 31 "Commit changes?" && git commit -m "$$DESCRIPTION"
	@BRANCH=$$(git rev-parse --abbrev-ref HEAD);\
	git push origin $$BRANCH

publish:
	@npm run build
	@npm run deploy
