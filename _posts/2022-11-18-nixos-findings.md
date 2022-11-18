---
layout: post
title: NixOS Findings
date: 2022-11-18
---

Venturing into NixOS has been an enlightening journey. Its revolutionary system configuration and package management have captured my interest. Take a look at this snippet:

```nix
{ config, pkgs, ... }:

{
  environment.systemPackages = with pkgs; [
    vim
    git
    tmux
  ];
}
```

With its declarative setup and the power of Nix, I can streamline my computing environment effortlessly. No more worrying about conflicts—NixOS ensures seamless software installations. The focus on stability through purity and immutability perfectly aligns with my preferences.