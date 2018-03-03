#!/bin/bash

set -ex

now --debug --force --public --no-clipboard

now alias --debug

now rm wip --debug --yes --safe
