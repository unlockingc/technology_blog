---
sidebar: auto
---

# Nix Reading Notes

> [基于1978年博士论文：The Purely Functional Software
Deployment Model](https://edolstra.github.io/pubs/phd-thesis.pdf)

## [C1. Concept](https://nixos.org/guides/nix-pills/why-you-should-give-it-a-try.html)
1. purely functional
   - (no state assumption of the system)
2. immutable
   - all content in a hash location in the store is fix
   - shortcoming:
     - [ ] security updates.
     - [x] software no obey the functional rule, require lib using absolute path.(firefox) **make wrapper**

::: tip How dependency look like in nix
依赖一个机遇nix/store的hash路径，这个hash里面的内容是绝对不可变的
``` bash
ldd  `which bash`
libc.so.6 => /nix/store/94n64qy99ja0vgbkf675nyk39g9b978n-glibc-2.19/lib/libc.so.6 (0x00007f0248cce000)
```
:::


## [C2. Installion](https://nixos.org/guides/nix-pills/install-on-your-running-system.html)

1. /nix/store
2. database
3. [ ] profile
4. nix expression

## [C3. Environment](https://nixos.org/guides/nix-pills/enter-environment.html)
1. Dependency
2. Closures
3. channels

## [C4. Language](https://nixos.org/guides/nix-pills/basics-of-language.html)
1. foundational type
2. foundational operation


## [C5. Functions and Import](https://nixos.org/guides/nix-pills/functions-and-imports.html)
1. 函数只能有一个参数
2. 多个参数的函数是通过函数嵌套实现的
3. 函数的参数可以是一个set，这个set类似一个json

## [C6. Derivation](https://nixos.org/guides/nix-pills/our-first-derivation.html)
1. derivation is stored in .drv intermediate file for others to ref
   1. arch
   2. system
   3. builder
   4. dependencies
2. derivation is not build until told.
3. directives in repl
   1. : prefix

## [C7. Working Derivation Example](https://nixos.org/guides/nix-pills/working-derivation.html)
1. out path还要显式指明呵呵
2. 把环境变量清零了额，虽然很合理但是很sb
3. 一个derivation入库分两步
   1. instantiate
   2. build

## [C8. General Builder](https://nixos.org/guides/nix-pills/generic-builders.html)
1. 记住如何传递buildInput作为dependencies
2. 如下

``` bash
set -e
unset PATH
for p in $buildInputs; do
  export PATH=$p/bin${PATH:+:}$PATH
done

tar -xf $src

for d in *; do
  if [ -d "$d" ]; then
    cd "$d"
    break
  fi
done

./configure --prefix=$out
make
make install
```

3. mkDependency函数包装

## [C9. Automatic Runtime Dependencies](https://nixos.org/guides/nix-pills/automatic-runtime-dependencies.html)
1. runtime dependencies 
2. rpath - patchelf
3. strip
::: tip rpath
[In computing, rpath designates the run-time search path hard-coded in an executable file or library. Dynamic linking loaders use the rpath to find required libraries.](https://en.wikipedia.org/wiki/Rpath)
:::

## [C10. nix-shell](https://nixos.org/guides/nix-pills/developing-with-nix-shell.html)
1. xxx
   1. nix-env 是一种操作nix-store的接口
   2. nix-store
   3. nix-build
   4. nix-shell
2. I need to manually source the env variables from the build script.
3. some generic stuff to make source easier

## [C11. Garbage Collection](https://nixos.org/guides/nix-pills/garbage-collector.html)


## [C12. Repositories& Pattern](https://nixos.org/guides/nix-pills/inputs-design-pattern.html)
1. nix repl
2. single repository design pattern
3. input design pattern
   1. 完全没有get，不就是要啥改啥嘛

## [C13. callPackage Pattern](https://nixos.org/guides/nix-pills/callpackage-design-pattern.html)
1. callPackage类似于一种函数封装，把不必要的重复参数hide掉

## [C14. Override Pattern](https://nixos.org/guides/nix-pills/override-design-pattern.html)
2. 把参数不从build前，而是在Build后，用类似`graphviz.override`重载掉

## [C15. Path](https://nixos.org/guides/nix-pills/nix-search-paths.html)
1. NIX_PATH
2. nix-env并不和NIX_PATH有关，而是和`.nix-defexpr`有关

## [C16. Nixpkgs](https://nixos.org/guides/nix-pills/nixpkgs-parameters.html)
1. Nixpkgs -> all-packages.nix -> config.nix(default $HOME/.nixpkgs/config.nix)


## [C17. Nixpkgs override](https://nixos.org/guides/nix-pills/nixpkgs-overriding-packages.html)
1. P->graphviz->x
   1. change graphviz dependency for building p

``` nix
pkgs = import <nixpkgs> {};
pkgs.graphviz = pkgs.graphviz.override { xorg = null; };
build(pkgs.P)
```

有一个lazy evaluation的什么机制，导致函数执行两遍结果不一样。真够傻狗的

## [C18. nix store path](https://nixos.org/guides/nix-pills/nix-store-paths.html)
tell us how a hash path is generated

## [C19. fundamental of std env](https://nixos.org/guides/nix-pills/fundamentals-of-stdenv.html)
1. stdenv是一个封装好的，添加derivation的东西

## [C20. Basic Bependencies and Hook](https://nixos.org/guides/nix-pills/basic-dependencies-and-hooks.html)
> We've also found that dependencies sometimes need to influence their dependents in ways the dependents can't or shouldn't predict. For this we have setup hooks and env hooks. Together, these 4 concepts support almost all build-time package interactions.