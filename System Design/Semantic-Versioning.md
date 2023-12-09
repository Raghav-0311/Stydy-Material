# Semantic Versioning -
Semantic versioning (also known as **SemVer**) is a versioning system that has been on the rise over the last few years. It has always been a problem for software developers, release managers and consumers. Having a universal way of versioning the software development projects is the best way to track what is going on with the software as new plugins, addons, libraries and extensions are being built almost every day. This problem can be solved by Semantic Versioning. In brief, it’s a way for numbering the software releases.

In Semantic Versioning, a version number consists of three parts: **Major**, **Minor**, and **Patch**, in the format of ``Major.Minor.Patch`` or ``X.Y.Z``, where **X** represents the **Major Version**, **Y** represents the **Minor Version**, and **Z** represents the **Patch Version**, and each part has a specific meaning.

![Versioning](https://devopedia.org/images/article/279/2766.1593275997.svg)

## Major Version ( X ) -
- The leftmost number denotes a major version. 
- When you increase the major version number, you increase it by one but you reset both patch version and minor versions to zero. 
- If the current version is **2.6.9** then the next upgrade for a major version will be **3.0.0**. 
- Increase the value of X when breaking the existing API.
- This is incremented when there are incompatible changes or breaking changes in the software.
- It signifies that the new version introduces significant changes that might require updates or adjustments in the way the software is used or integrated.

## Minor Version ( Y ) -
- It is used for the release of new functionality in the system. 
- When you increase the minor version, you increase it by one but you must reset the patch version to zero. 
- If the current version is **2.6.9** then the next upgrade for a minor version will be **2.7.0**. 
- Increase the value of Y when implementing new features in a backward-compatible way.
- This is incremented when new features are added in a backward-compatible manner.
- It indicates that the software has been extended with new functionality that doesn't break existing functionality.

## Patch Version ( Z ) -
- Versions for patches are used for bug fixes. 
- There are no functionality changes in the patch version upgrades. 
- If the current version is **2.6.9** then the next version for a patch upgrade will be **2.6.10**. 
- There is no limit to these numbers. 
- Increase the value of Z when fixing bugs.
- This is incremented when backward-compatible bug fixes or minor improvements are made.
- It represents that the software has been updated to adress issues or improve existing features without introducing new features or breaking changes.

<br />

> Pre-release metadata is identified by appending a hyphen to the end of the SemVer sequence. Thus a pre-release for version 1.0.0 could be 1.0.0-alpha.1. Then if another build is needed, it would become 1.0.0-alpha.2, and so on. Note that names cannot contain leading zeros, but hyphens are allowed in names for pre-release identifiers. 


### Points to keep in mind -
- The first version starts at 0.1.0 and not at 0.0.1, as no bug fixes have taken place, rather we start with a set of features as the first draft of the project.
- Before 1.0.0 is only the Development Phase, where you focus on getting stuff done. This stage is for developers in which the system is being developed.
- SemVer does not cover libraries tagged 0.*.*. The first stable version is 1.0.0.
  

### Advantages of SemVer -
- You can keep track of every transition in the software development phase.
- Versioning can do the job of explaining the developers about what type of changes have taken place and the possible updates that should take place in the software.
- It helps to keep things clean and meaningful.
- It helps other people who might be using your project as a dependency.