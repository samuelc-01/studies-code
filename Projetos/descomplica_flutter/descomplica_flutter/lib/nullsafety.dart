void main() {
  Pessoa people = Pessoa("Ricarth");
  print(people.toString());

  PessoaLate peopleLate = PessoaLate("Ricarth");
  peopleLate.lastName = "Limonada";
  print(people.toString());
}

class Pessoa {
  String name;
  String? lastName;

  Pessoa(this.name, {this.lastName});

  String toString() {
    if (this.lastName != null) {
      return this.name + " " + this.lastName!;
    }
    return this.name;
  }
}

class PessoaLate {
  String name;
  late String lastName;

  PessoaLate(this.name);

  String toString() {
    return this.name + " " + this.lastName;
  }
}
