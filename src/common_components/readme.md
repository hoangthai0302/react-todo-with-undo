#common components are absolutely independent 
#they contain no other component
# they only import the minimum lib

import PropTypes from 'prop-types';
import React, { Component } from 'react';

#or ultil function

import PropTypes from 'prop-types';
import React from 'react';
import { addCommas } from '../utils/NumberUtils';

#name is PascalCase, and match the file name
#for example: 
component name: HeartCount
filename:       HeartCount.js

