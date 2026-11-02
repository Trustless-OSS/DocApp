.PHONY: check format-check lint typecheck build

check: format-check lint typecheck build

format-check:
	pnpm format:check

lint:
	pnpm lint

typecheck:
	pnpm typecheck

build:
	pnpm build
