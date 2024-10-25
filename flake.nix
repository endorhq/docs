{
  description = "Nix development environment for NodeJS";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";  
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: 
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [ 
            pkgs.nodejs_20 
            pkgs.pnpm
            pkgs.nodePackages.typescript
          ];

          shellHook = ''
            node --version
            pnpm --version
          '';
        };
      }
    );
}
