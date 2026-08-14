"""Dummy sample script."""


def greet(name: str) -> str:
    return f"Hello, {name}!"


def main() -> None:
    for name in ["alpha", "beta", "gamma"]:
        print(greet(name))


if __name__ == "__main__":
    main()
