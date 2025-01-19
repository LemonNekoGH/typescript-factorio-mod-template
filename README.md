# typescript-factorio-mod-template

A template for creating Factorio mods using TypeScript. It contains a basic structure and configuration for you to start developing your mod.

## How to use

```bash
npx degit https://github.com/LemonNekoGH/typescript-factorio-mod-template <mod-name>
```

Symlink the mods to your Factorio mod folder:

```bash
cd /path/to/mod-name

ln -s /path/to/mod-name /path/to/factorio/data/mod-name
```

Install dependencies:

```bash
pnpm i
```

Run the script:

```bash
pnpm run dev
```

Now you can use the commands in Factorio, the script will be compiled automatically, but you need to exit and re-enter the game to see the changes(no need to restart the game).
