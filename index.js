/**
 * 
 * The Bipio HipChat Pod.  HipChat Actions and Content Emitters
 * 
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *  
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Pod = require('bip-pod'),
  Hipchatter = require('hipchatter'),
  HipChat = new Pod({
    name : 'hipchat', // pod name (action prefix)
    description : 'HipChat', // short description
    description_long : 'HipChat is hosted group chat and IM for companies and teams. Supercharge real-time collaboration with persistent chat rooms, file sharing, and chat history', // long description
    authType : 'issuer_token',
    authMap : {
      password : 'API Access Token'
    }
  });

HipChat.getClient = function(sysImports) {
  return new Hipchatter(sysImports.auth.issuer_token.password);
}

// Include any actions
HipChat.add(require('./room_notify.js'));

// -----------------------------------------------------------------------------
module.exports = HipChat;