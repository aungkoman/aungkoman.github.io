void main() {
  // Shwe Family
  final shwe =
      Person(id: 1, name: 'Shwe', parentMarriedId: 0); // No parent married ID
  final yin =
      Person(id: 2, name: 'Yin', parentMarriedId: 0); // No parent married ID
  final aung =
      Person(id: 3, name: 'Aung', parentMarriedId: 1); // No parent married ID
  final hein =
      Person(id: 4, name: 'Hein', parentMarriedId: 1); // No parent married ID
  // Thet Family
  final thet =
      Person(id: 5, name: 'Thet', parentMarriedId: 0); // No parent married ID
  final hlaing =
      Person(id: 6, name: 'Hlaing', parentMarriedId: 0); // No parent married ID
  final aye =
      Person(id: 7, name: 'Aye', parentMarriedId: 2); // No parent married ID
  final htay =
      Person(id: 8, name: 'Htay', parentMarriedId: 2); // No parent married ID
  // Aung Family
  final babySandar = Person(
      id: 9, name: 'Baby Sandar', parentMarriedId: 3); // No parent married ID
  final juniorKoMan = Person(
      id: 10,
      name: 'Junior Ko Man',
      parentMarriedId: 3); // No parent married ID

  // Creating marital relationships
  final shweYin = Married(
      id: 1, fromPersonId: 1, toPersonId: 2); // Shwe and Ngwe's marriage
  final thetHlaing = Married(
      id: 2, fromPersonId: 5, toPersonId: 6); // Thet and Hlaing's marriage
  final aungAye =
      Married(id: 3, fromPersonId: 3, toPersonId: 7); // Aung and Aye's marriage

  // Simulate a family
  final familyMembers = [
    shwe,
    yin,
    aung,
    hein,
    thet,
    hlaing,
    aye,
    htay,
    babySandar,
    juniorKoMan
  ];
  final marriages = [shweYin, thetHlaing, aungAye];

  // Print family information
  print('Family Members:');
  for (final person in familyMembers) {
    print(
        'ID: ${person.id}, Name: ${person.name}, Parent Married ID: ${person.parentMarriedId}');
  }

  print('\nMarital Relationships:');
  for (final marriage in marriages) {
    print(
        'ID: ${marriage.id}, From Person ID: ${marriage.fromPersonId}, To Person ID: ${marriage.toPersonId}');
  }

  Person getPerson(int personId) {
    List<Person> persons = [];
    persons = familyMembers.where((e) => e.id == personId).toList();
    return persons.first;
  }

  List<Person> getParents(int parrentMarridId) {
    List<Person> persons = [];
    for (int i = 0; i < marriages.length; i++) {
      if (marriages[i].id == parrentMarridId) {
        persons.add(getPerson(marriages[i].fromPersonId));
        persons.add(getPerson(marriages[i].toPersonId));
      }
    }
    return persons;
  }

  List<Person> getSiblings(Person person) {
    List<Person> persons = [];
    for (int i = 0; i < familyMembers.length; i++) {
      if (familyMembers[i].parentMarriedId != 0 &&
          familyMembers[i].id != person.id &&
          familyMembers[i].parentMarriedId == person.parentMarriedId) {
        persons.add(familyMembers[i]);
      }
    }
    return persons;
  }

  List<Person> getSpouses(int personId) {
    List<Person> persons = [];
    for (int i = 0; i < marriages.length; i++) {
      if (marriages[i].fromPersonId == personId) {
        persons.add(getPerson(marriages[i].toPersonId));
      } else if (marriages[i].toPersonId == personId) {
        persons.add(getPerson(marriages[i].fromPersonId));
      }
    }
    return persons;
  }

  List<Person> getChildrenByMarriedId(int parentMarriedId) {
    return familyMembers
        .where((e) => e.parentMarriedId == parentMarriedId)
        .toList();
  }

  List<Person> getChildren(int personId) {
    List<Person> persons = [];
    for (int i = 0; i < marriages.length; i++) {
      if (marriages[i].fromPersonId == personId) {
        persons.addAll(getChildrenByMarriedId(marriages[i].id));
      } else if (marriages[i].toPersonId == personId) {
        persons.addAll(getChildrenByMarriedId(marriages[i].id));
      }
    }
    return persons;
  }

  FamilyTree getFamilyTreeByPersonId(Person person) {
    FamilyTree familyTree = FamilyTree(
      person: person,
      parents: getParents(person.parentMarriedId),
      siblings: getSiblings(person),
      spouses: getSpouses(person.id),
      children: getChildren(person.id),
    );

    return familyTree;
  }

  Map<int, FamilyTree> familyGraph = {
    // aung.id : getFamilyTreeByPersonId(aung)
  };

  for (int i = 0; i < familyMembers.length; i++) {
    familyGraph[familyMembers[i].id] =
        getFamilyTreeByPersonId(familyMembers[i]);
  }

  // display family tree
  for (var entry in familyGraph.entries) {
    int key = entry.key;
    FamilyTree familyTree = entry.value;
    List<String> parents = familyTree.parents.map((e) => e.name).toList();
    List<String> siblings = familyTree.siblings.map((e) => e.name).toList();
    List<String> spouses = familyTree.spouses.map((e) => e.name).toList();
    List<String> children = familyTree.children.map((e) => e.name).toList();
    print('Key: $key, Person: ${familyTree.person.name} ');
    print("parents : ${parents}");
    print("siblings : ${siblings}");
    print("spouses : ${spouses}");
    print("children : ${children}");
    print("-----");
  }

  print("familyGraph");
  print(familyGraph);

  // ဒီမှာ Family Graph တစ်ခုလုံး ရနပြေီ။

  /*
    @input => person_one id and person_two id

  */

  int personOneId = 1;
  int personTwoId = 2;

  /* 
    Person One ရဲ့ 
      - id နဲ့ တိုက်စစ်မယ်။ ကိုယ့်ကိုယ်ကို မခ‌ေါ်အ‌ောင်။ -။ Self
      - personTwoId ကို Parents မှာ လိုက်ရှာမယ်။ 
        - တွ‌ေ့ရင် ဘာလုပ်မလဲ? တွ‌ေ့တဲ့ Relationship ကို သိမ်းရမယ်။
        - ဒီမှာ ဆိုရင်တာ‌ေ့ Parent ပ‌ေ့ါ။
        - ဒါဆို Array ထဲမှာ Parent တစ်ခုပဲ ရှိမယ်။
      - Parents မှာ မတွ‌ေ့ရင် siblings | spouses | children
        - ဒါလည်း အတူတူပဲ
        - ဒါတွ‌ေ အကုန်လုံးကို တိုက်ရိုက် ချိတ်ဆက်မှု ရှိတဲ့လူစာရင်း
        - ဒီ Level 1 မှာပဲ တွေ့ခဲ့ရင် Relationship Track Array ထဲမှာလည်း သက်ဆိုင်ရာ Relationship တစ်ခုပဲ ရှိမယ်။
      - Level 1 မှာ မတွေ့ခဲ့ဘူး
        Parentရဲ့ First ကို Person Track Array ထဲမှာ ထည့်မယ်။ 
          Parents ရဲ့ Family Tree မှာ လိုက်ရှာမယ်။
          - သူ့ရဲ့ Level One တွ‌ေ လိုက်ရှာမယ်။
          - တွ‌ေ့ရင် Relationship Track Array ထဲမှာ ထည့်မယ်။ ရှာတာကို ရပ်မယ်။
          - မတွ‌ေ့ဘူးဆိုရင် Person Track ထဲက pop လုပ်မယ်။
          - န‌ောက်တစ်ယ‌ောက် လိုက်ရှာမယ်။ -> Person Track Array ထဲမှာ ထည့်မယ်။
        Siblings | Spouses | Children

    တိုက်ရိုက် ချိတ်ဆက်နတေဲ့ သူတွမှောလ်ညး မတွေ့ဘူး
    တိုက်ရိုက် ချိတ်နတေဲ့ သူတွနေဲ့ တိုက်ရိုက်ဆက်ချိတ်ထားတဲ့သူတွ‌ေ မှာလည်း မတွ‌ေ့ဘူး။
    ဒါဆို ဘယ်လို လုပ်ကြမလဲ?

    Bread First မဟုတ်ပဲ
    Depth First မလား?
  */

  // prepare Tracking Array
  List<Person> trackPersons = [];
  List<String> trackRelationships = [];

  return;
}

class Person {
  final int id;
  final String name;
  final int parentMarriedId; // Referring to parent's married record ID

  Person({
    required this.id,
    required this.name,
    required this.parentMarriedId,
  });
}

class Married {
  final int id;
  final int fromPersonId;
  final int toPersonId;

  Married({
    required this.id,
    required this.fromPersonId,
    required this.toPersonId,
  });
}

class FamilyTree {
  final Person person;
  final List<Person> parents;
  final List<Person> siblings;
  final List<Person> spouses;
  final List<Person> children;

  FamilyTree(
      {required this.person,
      required this.parents,
      required this.siblings,
      required this.spouses,
      required this.children});
}
